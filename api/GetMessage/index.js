module.exports = async function (context, req) {
  const date = "2022-07-14T09:11:13.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

