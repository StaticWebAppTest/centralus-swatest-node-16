module.exports = async function (context, req) {
  const date = "2024-10-14T10:13:11.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

