module.exports = async function (context, req) {
  const date = "2022-12-04T14:08:18.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

