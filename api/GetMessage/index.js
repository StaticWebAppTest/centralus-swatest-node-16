module.exports = async function (context, req) {
  const date = "2024-04-05T20:10:07.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

