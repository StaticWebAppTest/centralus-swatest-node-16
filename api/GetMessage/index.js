module.exports = async function (context, req) {
  const date = "2022-09-05T13:36:56.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

