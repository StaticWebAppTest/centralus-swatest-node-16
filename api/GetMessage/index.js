module.exports = async function (context, req) {
  const date = "2023-08-31T03:08:57.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

