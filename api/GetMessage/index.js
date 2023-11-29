module.exports = async function (context, req) {
  const date = "2023-11-29T03:09:46.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

