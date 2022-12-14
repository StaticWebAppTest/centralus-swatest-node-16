module.exports = async function (context, req) {
  const date = "2022-12-14T05:09:19.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

