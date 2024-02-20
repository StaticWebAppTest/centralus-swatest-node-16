module.exports = async function (context, req) {
  const date = "2024-02-20T22:08:02.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

