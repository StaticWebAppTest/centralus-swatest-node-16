module.exports = async function (context, req) {
  const date = "2025-05-07T21:11:42.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

