module.exports = async function (context, req) {
  const date = "2022-12-29T07:08:26.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

