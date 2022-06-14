module.exports = async function (context, req) {
  const date = "2022-06-14T05:24:15.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

