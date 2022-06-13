module.exports = async function (context, req) {
  const date = "2022-06-13T06:14:48.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

