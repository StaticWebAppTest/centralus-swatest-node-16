module.exports = async function (context, req) {
  const date = "2024-07-19T01:23:00.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

