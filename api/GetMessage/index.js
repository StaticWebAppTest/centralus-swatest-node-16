module.exports = async function (context, req) {
  const date = "2024-07-10T20:10:55.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

