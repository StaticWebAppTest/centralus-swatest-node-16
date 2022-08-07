module.exports = async function (context, req) {
  const date = "2022-08-07T22:10:23.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

