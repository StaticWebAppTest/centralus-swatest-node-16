module.exports = async function (context, req) {
  const date = "2023-11-18T01:49:39.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

