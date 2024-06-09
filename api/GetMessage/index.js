module.exports = async function (context, req) {
  const date = "2024-06-09T14:09:12.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

