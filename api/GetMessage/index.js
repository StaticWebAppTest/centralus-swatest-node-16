module.exports = async function (context, req) {
  const date = "2024-08-23T20:11:58.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

