module.exports = async function (context, req) {
  const date = "2025-05-11T09:12:39.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

