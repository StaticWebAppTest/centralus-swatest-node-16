module.exports = async function (context, req) {
  const date = "2022-03-29T08:13:16.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

