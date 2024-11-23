module.exports = async function (context, req) {
  const date = "2024-11-23T03:22:14.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

