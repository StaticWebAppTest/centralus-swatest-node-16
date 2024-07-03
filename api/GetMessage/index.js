module.exports = async function (context, req) {
  const date = "2024-07-03T16:13:19.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

