module.exports = async function (context, req) {
  const date = "2023-02-20T11:08:33.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

