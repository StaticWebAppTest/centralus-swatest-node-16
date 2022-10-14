module.exports = async function (context, req) {
  const date = "2022-10-14T07:31:36.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

