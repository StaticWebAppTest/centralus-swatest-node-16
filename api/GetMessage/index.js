module.exports = async function (context, req) {
  const date = "2023-03-14T07:10:17.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

