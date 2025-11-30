module.exports = async function (context, req) {
  const date = "2025-11-30T11:10:25.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

