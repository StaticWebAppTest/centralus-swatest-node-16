module.exports = async function (context, req) {
  const date = "2025-10-10T06:20:07.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

