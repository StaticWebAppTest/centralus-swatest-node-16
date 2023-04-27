module.exports = async function (context, req) {
  const date = "2023-04-27T00:49:57.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

