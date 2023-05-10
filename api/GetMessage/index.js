module.exports = async function (context, req) {
  const date = "2023-05-10T17:08:34.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

