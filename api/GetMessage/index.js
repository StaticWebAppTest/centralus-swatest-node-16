module.exports = async function (context, req) {
  const date = "2023-06-02T21:07:24.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

