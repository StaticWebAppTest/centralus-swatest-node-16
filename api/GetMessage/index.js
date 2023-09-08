module.exports = async function (context, req) {
  const date = "2023-09-08T09:08:32.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

