module.exports = async function (context, req) {
  const date = "2024-05-03T04:13:00.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

