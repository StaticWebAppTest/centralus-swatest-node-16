module.exports = async function (context, req) {
  const date = "2022-12-08T05:09:37.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

