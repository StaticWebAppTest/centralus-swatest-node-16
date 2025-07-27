module.exports = async function (context, req) {
  const date = "2025-07-27T13:26:22.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

