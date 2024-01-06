module.exports = async function (context, req) {
  const date = "2024-01-06T14:08:00.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

