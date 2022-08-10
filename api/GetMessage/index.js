module.exports = async function (context, req) {
  const date = "2022-08-10T19:08:52.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

