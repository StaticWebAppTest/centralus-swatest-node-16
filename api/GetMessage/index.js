module.exports = async function (context, req) {
  const date = "2024-05-19T17:08:43.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

