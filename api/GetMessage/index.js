module.exports = async function (context, req) {
  const date = "2022-07-08T08:16:22.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

