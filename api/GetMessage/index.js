module.exports = async function (context, req) {
  const date = "2023-09-20T02:15:23.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

