module.exports = async function (context, req) {
  const date = "2023-08-02T12:16:34.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

