module.exports = async function (context, req) {
  const date = "2024-11-26T08:16:57.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

