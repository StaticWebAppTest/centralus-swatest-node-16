module.exports = async function (context, req) {
  const date = "2024-11-27T09:13:25.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

