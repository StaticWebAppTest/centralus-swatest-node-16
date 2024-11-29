module.exports = async function (context, req) {
  const date = "2024-11-29T15:12:59.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

