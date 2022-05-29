module.exports = async function (context, req) {
  const date = "2022-05-29T08:13:42.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

