module.exports = async function (context, req) {
  const date = "2024-01-18T21:08:41.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

