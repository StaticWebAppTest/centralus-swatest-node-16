module.exports = async function (context, req) {
  const date = "2024-08-28T10:11:21.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

