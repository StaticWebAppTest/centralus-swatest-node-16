module.exports = async function (context, req) {
  const date = "2024-06-11T01:56:47.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

