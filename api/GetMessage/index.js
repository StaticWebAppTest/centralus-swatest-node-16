module.exports = async function (context, req) {
  const date = "2024-07-27T12:19:51.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

