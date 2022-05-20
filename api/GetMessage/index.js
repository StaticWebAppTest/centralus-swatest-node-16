module.exports = async function (context, req) {
  const date = "2022-05-20T22:11:44.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

