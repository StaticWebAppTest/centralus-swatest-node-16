module.exports = async function (context, req) {
  const date = "2023-04-02T03:09:06.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

