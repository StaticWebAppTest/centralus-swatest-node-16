module.exports = async function (context, req) {
  const date = "2024-09-23T05:11:54.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

