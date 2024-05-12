module.exports = async function (context, req) {
  const date = "2024-05-12T20:09:10.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

