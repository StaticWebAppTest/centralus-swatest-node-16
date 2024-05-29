module.exports = async function (context, req) {
  const date = "2024-05-29T04:13:51.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

