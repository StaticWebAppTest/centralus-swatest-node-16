module.exports = async function (context, req) {
  const date = "2024-02-27T04:11:29.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

