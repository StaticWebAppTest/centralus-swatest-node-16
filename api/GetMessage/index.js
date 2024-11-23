module.exports = async function (context, req) {
  const date = "2024-11-23T10:11:29.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

