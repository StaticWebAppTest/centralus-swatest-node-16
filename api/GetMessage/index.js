module.exports = async function (context, req) {
  const date = "2022-08-30T12:24:43.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

