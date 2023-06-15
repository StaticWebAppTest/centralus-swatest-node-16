module.exports = async function (context, req) {
  const date = "2023-06-15T16:10:57.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

