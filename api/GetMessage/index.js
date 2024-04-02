module.exports = async function (context, req) {
  const date = "2024-04-02T12:16:56.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

