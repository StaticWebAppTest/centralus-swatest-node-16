module.exports = async function (context, req) {
  const date = "2022-04-29T14:14:18.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

