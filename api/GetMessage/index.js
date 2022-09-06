module.exports = async function (context, req) {
  const date = "2022-09-06T21:10:44.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

