module.exports = async function (context, req) {
  const date = "2023-08-01T04:10:39.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

