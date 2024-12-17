module.exports = async function (context, req) {
  const date = "2024-12-17T11:10:46.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

