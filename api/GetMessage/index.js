module.exports = async function (context, req) {
  const date = "2022-12-08T21:09:19.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

