module.exports = async function (context, req) {
  const date = "2022-10-11T23:16:06.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

