module.exports = async function (context, req) {
  const date = "2025-05-06T19:09:35.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

