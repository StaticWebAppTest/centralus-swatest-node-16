module.exports = async function (context, req) {
  const date = "2023-11-29T14:08:37.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

