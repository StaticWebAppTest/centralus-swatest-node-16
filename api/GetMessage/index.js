module.exports = async function (context, req) {
  const date = "2023-05-29T04:10:51.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

