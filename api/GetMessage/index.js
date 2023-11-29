module.exports = async function (context, req) {
  const date = "2023-11-29T12:17:24.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

