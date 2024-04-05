module.exports = async function (context, req) {
  const date = "2024-04-05T01:42:32.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

