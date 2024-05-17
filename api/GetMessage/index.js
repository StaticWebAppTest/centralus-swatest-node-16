module.exports = async function (context, req) {
  const date = "2024-05-17T23:10:53.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

