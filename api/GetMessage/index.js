module.exports = async function (context, req) {
  const date = "2022-03-23T02:25:51.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

