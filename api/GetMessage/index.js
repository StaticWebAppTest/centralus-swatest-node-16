module.exports = async function (context, req) {
  const date = "2023-09-20T23:08:18.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

