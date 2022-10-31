module.exports = async function (context, req) {
  const date = "2022-10-31T05:28:01.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

