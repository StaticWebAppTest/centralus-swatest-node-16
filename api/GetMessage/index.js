module.exports = async function (context, req) {
  const date = "2022-04-02T03:22:49.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

