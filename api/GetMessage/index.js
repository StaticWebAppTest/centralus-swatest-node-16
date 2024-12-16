module.exports = async function (context, req) {
  const date = "2024-12-16T21:11:36.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

