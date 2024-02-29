module.exports = async function (context, req) {
  const date = "2024-02-29T20:10:40.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

