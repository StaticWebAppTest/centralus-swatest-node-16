module.exports = async function (context, req) {
  const date = "2024-06-02T12:16:40.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

