module.exports = async function (context, req) {
  const date = "2022-12-04T00:51:06.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

