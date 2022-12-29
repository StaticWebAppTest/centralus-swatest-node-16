module.exports = async function (context, req) {
  const date = "2022-12-29T15:09:16.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

