module.exports = async function (context, req) {
  const date = "2024-08-29T11:10:23.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

