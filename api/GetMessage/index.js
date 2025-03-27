module.exports = async function (context, req) {
  const date = "2025-03-27T16:15:57.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

