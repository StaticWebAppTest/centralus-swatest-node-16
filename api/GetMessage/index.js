module.exports = async function (context, req) {
  const date = "2022-06-02T03:41:18.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

