module.exports = async function (context, req) {
  const date = "2023-10-10T23:08:20.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

