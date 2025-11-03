module.exports = async function (context, req) {
  const date = "2025-11-03T05:14:18.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

