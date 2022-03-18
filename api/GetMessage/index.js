module.exports = async function (context, req) {
  const date = "2022-03-18T21:09:44.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

