module.exports = async function (context, req) {
  const date = "2024-09-27T08:15:28.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

