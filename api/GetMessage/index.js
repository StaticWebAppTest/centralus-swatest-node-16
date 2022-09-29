module.exports = async function (context, req) {
  const date = "2022-09-29T19:15:27.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

