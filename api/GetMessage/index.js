module.exports = async function (context, req) {
  const date = "2022-12-07T06:12:48.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

