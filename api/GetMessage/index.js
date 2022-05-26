module.exports = async function (context, req) {
  const date = "2022-05-26T08:14:56.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

