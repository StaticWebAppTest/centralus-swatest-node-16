module.exports = async function (context, req) {
  const date = "2025-11-25T17:14:27.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

