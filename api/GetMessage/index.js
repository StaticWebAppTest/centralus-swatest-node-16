module.exports = async function (context, req) {
  const date = "2024-08-18T20:10:33.463Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

