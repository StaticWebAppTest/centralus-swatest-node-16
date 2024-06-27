module.exports = async function (context, req) {
  const date = "2024-06-27T03:11:52.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

