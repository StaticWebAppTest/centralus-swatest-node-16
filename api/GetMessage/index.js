module.exports = async function (context, req) {
  const date = "2024-09-07T10:10:55.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

