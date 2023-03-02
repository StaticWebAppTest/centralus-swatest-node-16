module.exports = async function (context, req) {
  const date = "2023-03-02T02:27:06.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

