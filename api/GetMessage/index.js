module.exports = async function (context, req) {
  const date = "2024-11-21T03:23:27.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

