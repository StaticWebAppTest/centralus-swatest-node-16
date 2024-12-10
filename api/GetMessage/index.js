module.exports = async function (context, req) {
  const date = "2024-12-10T09:13:52.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

