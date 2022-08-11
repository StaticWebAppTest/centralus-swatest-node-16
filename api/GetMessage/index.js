module.exports = async function (context, req) {
  const date = "2022-08-11T03:47:15.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

