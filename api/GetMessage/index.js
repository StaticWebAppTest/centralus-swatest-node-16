module.exports = async function (context, req) {
  const date = "2024-06-07T08:13:13.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

