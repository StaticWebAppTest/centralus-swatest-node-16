module.exports = async function (context, req) {
  const date = "2024-11-12T16:14:13.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

