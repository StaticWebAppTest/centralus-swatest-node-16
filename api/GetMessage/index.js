module.exports = async function (context, req) {
  const date = "2024-09-28T19:09:35.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

