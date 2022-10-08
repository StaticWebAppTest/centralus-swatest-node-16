module.exports = async function (context, req) {
  const date = "2022-10-08T11:10:18.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

