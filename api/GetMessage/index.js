module.exports = async function (context, req) {
  const date = "2023-04-21T02:34:06.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

