module.exports = async function (context, req) {
  const date = "2023-11-03T20:09:39.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

