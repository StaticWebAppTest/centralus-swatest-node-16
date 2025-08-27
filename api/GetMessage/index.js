module.exports = async function (context, req) {
  const date = "2025-08-27T13:22:57.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

