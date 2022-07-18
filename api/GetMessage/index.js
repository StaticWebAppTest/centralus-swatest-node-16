module.exports = async function (context, req) {
  const date = "2022-07-18T03:16:10.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

