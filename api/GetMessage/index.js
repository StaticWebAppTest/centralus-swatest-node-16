module.exports = async function (context, req) {
  const date = "2024-11-14T16:14:58.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

