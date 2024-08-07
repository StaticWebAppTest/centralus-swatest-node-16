module.exports = async function (context, req) {
  const date = "2024-08-07T10:11:16.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

