module.exports = async function (context, req) {
  const date = "2022-09-27T06:46:16.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

