module.exports = async function (context, req) {
  const date = "2023-12-14T18:11:51.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

