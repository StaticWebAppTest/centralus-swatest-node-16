module.exports = async function (context, req) {
  const date = "2023-08-30T09:08:41.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

