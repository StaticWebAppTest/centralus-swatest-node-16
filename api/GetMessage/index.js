module.exports = async function (context, req) {
  const date = "2025-03-23T12:21:47.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

