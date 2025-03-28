module.exports = async function (context, req) {
  const date = "2025-03-28T22:11:48.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

