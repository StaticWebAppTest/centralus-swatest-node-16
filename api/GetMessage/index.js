module.exports = async function (context, req) {
  const date = "2024-04-23T19:07:15.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

