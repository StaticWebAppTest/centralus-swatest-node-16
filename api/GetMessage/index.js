module.exports = async function (context, req) {
  const date = "2024-10-13T11:08:44.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

