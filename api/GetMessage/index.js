module.exports = async function (context, req) {
  const date = "2023-09-03T16:09:33.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

