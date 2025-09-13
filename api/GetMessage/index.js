module.exports = async function (context, req) {
  const date = "2025-09-13T06:16:45.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

