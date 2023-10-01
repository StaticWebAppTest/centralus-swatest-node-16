module.exports = async function (context, req) {
  const date = "2023-10-01T05:08:14.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

