module.exports = async function (context, req) {
  const date = "2024-04-27T20:08:53.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

