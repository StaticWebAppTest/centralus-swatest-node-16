module.exports = async function (context, req) {
  const date = "2024-04-10T01:42:39.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

