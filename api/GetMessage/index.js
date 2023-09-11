module.exports = async function (context, req) {
  const date = "2023-09-11T01:43:03.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

