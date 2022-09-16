module.exports = async function (context, req) {
  const date = "2022-09-16T10:13:42.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

