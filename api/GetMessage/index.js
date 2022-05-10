module.exports = async function (context, req) {
  const date = "2022-05-10T05:11:06.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

