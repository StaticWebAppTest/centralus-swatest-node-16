module.exports = async function (context, req) {
  const date = "2023-09-02T14:06:49.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

