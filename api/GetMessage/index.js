module.exports = async function (context, req) {
  const date = "2022-05-20T07:10:44.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

