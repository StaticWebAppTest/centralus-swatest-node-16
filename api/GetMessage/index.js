module.exports = async function (context, req) {
  const date = "2023-04-18T01:58:35.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

