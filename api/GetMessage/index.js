module.exports = async function (context, req) {
  const date = "2024-12-17T13:23:22.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

