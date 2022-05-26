module.exports = async function (context, req) {
  const date = "2022-05-26T09:11:51.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

