module.exports = async function (context, req) {
  const date = "2024-12-14T05:11:42.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

