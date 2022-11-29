module.exports = async function (context, req) {
  const date = "2022-11-29T00:54:52.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

