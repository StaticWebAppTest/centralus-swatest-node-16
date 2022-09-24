module.exports = async function (context, req) {
  const date = "2022-09-24T06:19:56.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

