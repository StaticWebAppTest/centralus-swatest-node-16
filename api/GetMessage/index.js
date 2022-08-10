module.exports = async function (context, req) {
  const date = "2022-08-10T08:13:52.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

