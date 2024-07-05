module.exports = async function (context, req) {
  const date = "2024-07-05T20:12:05.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

