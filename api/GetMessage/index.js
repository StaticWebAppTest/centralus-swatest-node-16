module.exports = async function (context, req) {
  const date = "2022-08-14T13:24:04.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

