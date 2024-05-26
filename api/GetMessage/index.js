module.exports = async function (context, req) {
  const date = "2024-05-26T09:10:31.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

