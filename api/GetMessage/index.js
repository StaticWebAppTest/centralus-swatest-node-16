module.exports = async function (context, req) {
  const date = "2022-10-05T14:08:14.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

