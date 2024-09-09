module.exports = async function (context, req) {
  const date = "2024-09-09T10:12:39.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

