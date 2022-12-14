module.exports = async function (context, req) {
  const date = "2022-12-14T00:51:24.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

