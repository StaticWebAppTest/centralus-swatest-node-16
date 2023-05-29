module.exports = async function (context, req) {
  const date = "2023-05-29T07:08:27.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

