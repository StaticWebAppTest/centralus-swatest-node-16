module.exports = async function (context, req) {
  const date = "2022-09-30T07:35:09.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

