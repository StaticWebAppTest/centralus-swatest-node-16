module.exports = async function (context, req) {
  const date = "2022-10-29T23:13:19.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

