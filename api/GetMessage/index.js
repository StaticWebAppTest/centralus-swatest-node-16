module.exports = async function (context, req) {
  const date = "2024-11-12T13:19:59.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

