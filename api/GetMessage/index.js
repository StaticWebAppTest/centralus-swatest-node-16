module.exports = async function (context, req) {
  const date = "2023-03-27T08:12:58.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

