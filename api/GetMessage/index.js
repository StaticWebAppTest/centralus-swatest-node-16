module.exports = async function (context, req) {
  const date = "2025-06-27T20:14:42.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

