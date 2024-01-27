module.exports = async function (context, req) {
  const date = "2024-01-27T20:08:09.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

