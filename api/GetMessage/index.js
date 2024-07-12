module.exports = async function (context, req) {
  const date = "2024-07-12T15:10:39.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

