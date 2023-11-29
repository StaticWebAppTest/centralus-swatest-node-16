module.exports = async function (context, req) {
  const date = "2023-11-29T18:11:42.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

