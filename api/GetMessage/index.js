module.exports = async function (context, req) {
  const date = "2023-02-17T08:13:10.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

