module.exports = async function (context, req) {
  const date = "2022-12-29T18:11:23.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

