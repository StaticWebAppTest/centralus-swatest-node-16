module.exports = async function (context, req) {
  const date = "2024-05-22T08:13:25.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

