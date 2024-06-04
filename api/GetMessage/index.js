module.exports = async function (context, req) {
  const date = "2024-06-04T22:10:25.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

