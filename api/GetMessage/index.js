module.exports = async function (context, req) {
  const date = "2022-10-29T17:13:58.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

