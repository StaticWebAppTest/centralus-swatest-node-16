module.exports = async function (context, req) {
  const date = "2022-12-29T04:11:44.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

