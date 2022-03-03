module.exports = async function (context, req) {
  const date = "2022-03-03T06:12:29.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

