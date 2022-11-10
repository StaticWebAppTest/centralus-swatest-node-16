module.exports = async function (context, req) {
  const date = "2022-11-10T12:27:01.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

