module.exports = async function (context, req) {
  const date = "2022-08-10T15:11:13.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

