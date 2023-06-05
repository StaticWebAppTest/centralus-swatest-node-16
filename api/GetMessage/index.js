module.exports = async function (context, req) {
  const date = "2023-06-05T08:11:45.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

