module.exports = async function (context, req) {
  const date = "2024-07-08T20:12:16.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

