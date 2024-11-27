module.exports = async function (context, req) {
  const date = "2024-11-27T20:14:00.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

