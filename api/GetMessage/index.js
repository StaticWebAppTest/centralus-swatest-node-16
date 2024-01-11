module.exports = async function (context, req) {
  const date = "2024-01-11T14:08:55.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

