module.exports = async function (context, req) {
  const date = "2025-04-12T17:10:08.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

