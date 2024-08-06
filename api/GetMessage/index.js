module.exports = async function (context, req) {
  const date = "2024-08-06T18:15:02.463Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

