module.exports = async function (context, req) {
  const date = "2025-05-03T14:11:14.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

