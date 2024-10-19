module.exports = async function (context, req) {
  const date = "2024-10-19T12:20:42.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

