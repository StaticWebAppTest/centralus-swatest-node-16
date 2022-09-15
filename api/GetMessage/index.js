module.exports = async function (context, req) {
  const date = "2022-09-15T14:19:44.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

