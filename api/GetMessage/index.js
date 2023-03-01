module.exports = async function (context, req) {
  const date = "2023-03-01T02:37:48.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

