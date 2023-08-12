module.exports = async function (context, req) {
  const date = "2023-08-12T05:07:23.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

