module.exports = async function (context, req) {
  const date = "2022-07-06T03:43:37.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

