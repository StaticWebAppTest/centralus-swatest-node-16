module.exports = async function (context, req) {
  const date = "2023-05-29T15:08:29.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

