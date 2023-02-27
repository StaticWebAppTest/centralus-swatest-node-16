module.exports = async function (context, req) {
  const date = "2023-02-27T20:10:59.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

