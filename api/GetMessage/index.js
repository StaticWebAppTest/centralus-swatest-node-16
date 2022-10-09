module.exports = async function (context, req) {
  const date = "2022-10-09T12:22:59.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

