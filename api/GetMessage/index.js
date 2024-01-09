module.exports = async function (context, req) {
  const date = "2024-01-09T15:09:53.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

