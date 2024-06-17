module.exports = async function (context, req) {
  const date = "2024-06-17T14:10:07.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

