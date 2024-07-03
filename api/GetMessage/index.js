module.exports = async function (context, req) {
  const date = "2024-07-03T01:57:00.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

