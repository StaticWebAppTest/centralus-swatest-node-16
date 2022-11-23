module.exports = async function (context, req) {
  const date = "2022-11-23T00:53:12.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

