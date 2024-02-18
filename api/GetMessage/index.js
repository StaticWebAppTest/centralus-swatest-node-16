module.exports = async function (context, req) {
  const date = "2024-02-18T09:08:26.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

