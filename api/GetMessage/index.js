module.exports = async function (context, req) {
  const date = "2022-12-05T05:09:46.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

