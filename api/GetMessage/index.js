module.exports = async function (context, req) {
  const date = "2022-12-13T08:13:14.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

