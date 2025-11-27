module.exports = async function (context, req) {
  const date = "2025-11-27T09:15:57.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

