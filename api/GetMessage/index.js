module.exports = async function (context, req) {
  const date = "2023-04-20T23:08:54.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

