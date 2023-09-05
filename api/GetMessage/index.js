module.exports = async function (context, req) {
  const date = "2023-09-05T01:40:05.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

