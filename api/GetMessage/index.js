module.exports = async function (context, req) {
  const date = "2025-04-03T19:10:33.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

