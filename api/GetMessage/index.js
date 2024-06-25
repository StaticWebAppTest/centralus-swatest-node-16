module.exports = async function (context, req) {
  const date = "2024-06-25T17:10:02.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

