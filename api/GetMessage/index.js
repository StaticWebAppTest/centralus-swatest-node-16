module.exports = async function (context, req) {
  const date = "2022-04-13T06:13:48.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

