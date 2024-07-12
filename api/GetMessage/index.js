module.exports = async function (context, req) {
  const date = "2024-07-12T01:57:46.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

