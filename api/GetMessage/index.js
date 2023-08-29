module.exports = async function (context, req) {
  const date = "2023-08-29T03:10:06.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

