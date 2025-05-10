module.exports = async function (context, req) {
  const date = "2025-05-10T05:12:20.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

