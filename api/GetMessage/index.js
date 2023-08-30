module.exports = async function (context, req) {
  const date = "2023-08-30T05:08:13.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

