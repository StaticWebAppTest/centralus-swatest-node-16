module.exports = async function (context, req) {
  const date = "2025-01-30T11:10:08.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

