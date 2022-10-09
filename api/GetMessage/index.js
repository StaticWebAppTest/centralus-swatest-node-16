module.exports = async function (context, req) {
  const date = "2022-10-09T22:12:30.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

