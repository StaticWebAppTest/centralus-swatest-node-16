module.exports = async function (context, req) {
  const date = "2022-09-09T14:17:51.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

