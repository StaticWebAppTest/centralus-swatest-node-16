module.exports = async function (context, req) {
  const date = "2023-09-06T21:07:41.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

