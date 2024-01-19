module.exports = async function (context, req) {
  const date = "2024-01-19T20:10:07.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

