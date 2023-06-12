module.exports = async function (context, req) {
  const date = "2023-06-12T04:10:48.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

