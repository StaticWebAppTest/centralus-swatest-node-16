module.exports = async function (context, req) {
  const date = "2025-05-27T17:11:57.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

