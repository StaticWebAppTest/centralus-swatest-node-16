module.exports = async function (context, req) {
  const date = "2022-09-15T11:10:44.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

