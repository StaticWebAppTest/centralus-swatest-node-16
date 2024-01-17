module.exports = async function (context, req) {
  const date = "2024-01-17T23:10:06.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

