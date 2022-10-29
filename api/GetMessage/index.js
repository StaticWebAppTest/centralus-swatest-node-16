module.exports = async function (context, req) {
  const date = "2022-10-29T10:12:28.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

