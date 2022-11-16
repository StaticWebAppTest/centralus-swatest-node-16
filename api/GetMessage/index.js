module.exports = async function (context, req) {
  const date = "2022-11-16T02:53:33.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

