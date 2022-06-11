module.exports = async function (context, req) {
  const date = "2022-06-11T12:17:17.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

