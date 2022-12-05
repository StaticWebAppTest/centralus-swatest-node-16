module.exports = async function (context, req) {
  const date = "2022-12-05T02:13:17.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

