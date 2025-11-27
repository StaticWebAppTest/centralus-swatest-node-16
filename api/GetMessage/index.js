module.exports = async function (context, req) {
  const date = "2025-11-27T05:14:48.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

