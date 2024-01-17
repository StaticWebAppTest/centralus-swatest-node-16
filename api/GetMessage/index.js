module.exports = async function (context, req) {
  const date = "2024-01-17T04:12:00.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

