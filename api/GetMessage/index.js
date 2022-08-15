module.exports = async function (context, req) {
  const date = "2022-08-15T13:35:01.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

