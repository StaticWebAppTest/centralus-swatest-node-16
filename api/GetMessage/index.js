module.exports = async function (context, req) {
  const date = "2024-11-23T13:17:52.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

