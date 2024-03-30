module.exports = async function (context, req) {
  const date = "2024-03-30T09:08:11.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

