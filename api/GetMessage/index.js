module.exports = async function (context, req) {
  const date = "2022-06-27T10:12:37.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

