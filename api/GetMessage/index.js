module.exports = async function (context, req) {
  const date = "2022-12-29T17:08:11.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

