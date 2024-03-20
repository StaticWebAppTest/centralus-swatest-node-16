module.exports = async function (context, req) {
  const date = "2024-03-20T01:40:49.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

