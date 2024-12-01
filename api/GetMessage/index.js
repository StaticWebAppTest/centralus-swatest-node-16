module.exports = async function (context, req) {
  const date = "2024-12-01T06:17:10.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

