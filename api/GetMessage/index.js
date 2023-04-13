module.exports = async function (context, req) {
  const date = "2023-04-13T08:11:59.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

