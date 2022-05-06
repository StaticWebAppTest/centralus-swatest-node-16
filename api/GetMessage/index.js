module.exports = async function (context, req) {
  const date = "2022-05-06T05:10:58.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

