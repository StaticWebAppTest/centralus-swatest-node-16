module.exports = async function (context, req) {
  const date = "2024-03-19T16:12:00.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

