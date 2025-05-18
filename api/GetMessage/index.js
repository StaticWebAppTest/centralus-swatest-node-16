module.exports = async function (context, req) {
  const date = "2025-05-18T12:23:27.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

