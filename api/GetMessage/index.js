module.exports = async function (context, req) {
  const date = "2022-10-01T08:17:05.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

