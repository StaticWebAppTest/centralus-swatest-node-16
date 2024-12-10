module.exports = async function (context, req) {
  const date = "2024-12-10T06:18:22.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

