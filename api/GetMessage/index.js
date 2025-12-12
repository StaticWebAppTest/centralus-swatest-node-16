module.exports = async function (context, req) {
  const date = "2025-12-12T11:13:57.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

