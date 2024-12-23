module.exports = async function (context, req) {
  const date = "2024-12-23T08:16:10.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

