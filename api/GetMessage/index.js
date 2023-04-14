module.exports = async function (context, req) {
  const date = "2023-04-14T18:10:42.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

