module.exports = async function (context, req) {
  const date = "2023-11-18T22:07:42.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

