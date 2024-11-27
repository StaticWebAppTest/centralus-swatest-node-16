module.exports = async function (context, req) {
  const date = "2024-11-27T01:00:58.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

