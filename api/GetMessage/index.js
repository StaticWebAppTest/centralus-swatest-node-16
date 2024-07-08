module.exports = async function (context, req) {
  const date = "2024-07-08T01:59:57.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

