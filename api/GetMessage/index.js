module.exports = async function (context, req) {
  const date = "2022-11-04T19:09:39.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

