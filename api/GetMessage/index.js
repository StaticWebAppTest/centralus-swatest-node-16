module.exports = async function (context, req) {
  const date = "2022-12-02T12:18:20.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

