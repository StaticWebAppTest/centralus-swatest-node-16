module.exports = async function (context, req) {
  const date = "2023-05-02T12:17:05.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

