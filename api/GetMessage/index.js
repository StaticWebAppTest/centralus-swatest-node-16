module.exports = async function (context, req) {
  const date = "2022-06-29T23:10:49.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

