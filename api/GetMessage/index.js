module.exports = async function (context, req) {
  const date = "2024-05-12T01:55:34.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

