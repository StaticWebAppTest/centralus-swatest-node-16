module.exports = async function (context, req) {
  const date = "2024-03-03T20:09:18.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

