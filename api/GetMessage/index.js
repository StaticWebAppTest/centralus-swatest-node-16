module.exports = async function (context, req) {
  const date = "2022-11-29T03:20:53.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

