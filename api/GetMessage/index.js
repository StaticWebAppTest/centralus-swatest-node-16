module.exports = async function (context, req) {
  const date = "2022-05-09T12:21:04.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

