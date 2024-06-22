module.exports = async function (context, req) {
  const date = "2024-06-22T09:10:32.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

