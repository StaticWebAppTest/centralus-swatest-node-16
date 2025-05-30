module.exports = async function (context, req) {
  const date = "2025-05-30T14:13:32.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

