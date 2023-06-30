module.exports = async function (context, req) {
  const date = "2023-06-30T00:57:10.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

