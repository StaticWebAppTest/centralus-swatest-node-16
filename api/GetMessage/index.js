module.exports = async function (context, req) {
  const date = "2025-05-12T17:11:45.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

