module.exports = async function (context, req) {
  const date = "2025-09-28T05:11:57.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

