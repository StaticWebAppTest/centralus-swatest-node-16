module.exports = async function (context, req) {
  const date = "2025-09-26T14:11:06.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

