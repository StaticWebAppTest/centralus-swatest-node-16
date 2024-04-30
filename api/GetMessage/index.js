module.exports = async function (context, req) {
  const date = "2024-04-30T01:46:24.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

