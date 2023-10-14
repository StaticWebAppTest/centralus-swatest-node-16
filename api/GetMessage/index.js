module.exports = async function (context, req) {
  const date = "2023-10-14T02:13:35.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

