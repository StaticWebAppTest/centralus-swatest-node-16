module.exports = async function (context, req) {
  const date = "2024-09-22T11:08:49.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

