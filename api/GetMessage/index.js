module.exports = async function (context, req) {
  const date = "2023-04-04T08:12:04.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

