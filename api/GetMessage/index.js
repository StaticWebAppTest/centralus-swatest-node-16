module.exports = async function (context, req) {
  const date = "2024-12-13T21:11:18.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

