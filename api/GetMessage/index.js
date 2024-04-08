module.exports = async function (context, req) {
  const date = "2024-04-08T20:10:50.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

