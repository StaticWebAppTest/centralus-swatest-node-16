module.exports = async function (context, req) {
  const date = "2023-08-16T15:08:46.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

