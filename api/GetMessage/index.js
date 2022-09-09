module.exports = async function (context, req) {
  const date = "2022-09-09T17:20:19.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

