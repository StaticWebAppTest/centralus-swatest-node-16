module.exports = async function (context, req) {
  const date = "2023-10-25T12:16:29.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

