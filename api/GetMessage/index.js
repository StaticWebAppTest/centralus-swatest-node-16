module.exports = async function (context, req) {
  const date = "2023-08-02T00:47:49.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

