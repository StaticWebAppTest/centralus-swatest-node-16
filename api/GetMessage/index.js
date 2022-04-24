module.exports = async function (context, req) {
  const date = "2022-04-24T00:49:25.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

