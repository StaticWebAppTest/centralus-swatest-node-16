module.exports = async function (context, req) {
  const date = "2024-05-19T15:09:24.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

