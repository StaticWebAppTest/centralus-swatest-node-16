module.exports = async function (context, req) {
  const date = "2024-10-12T06:14:59.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

