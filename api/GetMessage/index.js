module.exports = async function (context, req) {
  const date = "2022-05-21T21:09:42.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

