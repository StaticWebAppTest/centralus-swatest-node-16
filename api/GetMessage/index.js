module.exports = async function (context, req) {
  const date = "2022-05-29T18:12:59.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

