module.exports = async function (context, req) {
  const date = "2024-08-12T11:09:34.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

