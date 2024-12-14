module.exports = async function (context, req) {
  const date = "2024-12-14T09:11:52.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

