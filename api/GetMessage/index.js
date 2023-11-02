module.exports = async function (context, req) {
  const date = "2023-11-02T08:11:23.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

