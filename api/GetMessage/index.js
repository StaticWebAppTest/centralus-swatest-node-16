module.exports = async function (context, req) {
  const date = "2024-06-19T06:14:11.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

