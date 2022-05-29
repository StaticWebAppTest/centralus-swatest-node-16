module.exports = async function (context, req) {
  const date = "2022-05-29T11:09:13.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

