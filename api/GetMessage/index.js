module.exports = async function (context, req) {
  const date = "2024-12-23T21:10:24.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

