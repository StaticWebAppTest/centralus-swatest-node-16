module.exports = async function (context, req) {
  const date = "2022-08-21T22:10:41.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

