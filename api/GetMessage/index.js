module.exports = async function (context, req) {
  const date = "2022-05-29T14:10:27.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

