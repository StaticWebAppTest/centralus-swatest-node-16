module.exports = async function (context, req) {
  const date = "2024-09-03T15:11:48.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

