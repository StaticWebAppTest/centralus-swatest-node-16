module.exports = async function (context, req) {
  const date = "2022-03-29T20:10:50.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

