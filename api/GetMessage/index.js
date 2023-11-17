module.exports = async function (context, req) {
  const date = "2023-11-17T01:51:52.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

