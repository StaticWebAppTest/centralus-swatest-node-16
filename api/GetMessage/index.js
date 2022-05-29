module.exports = async function (context, req) {
  const date = "2022-05-29T09:10:44.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

