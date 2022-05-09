module.exports = async function (context, req) {
  const date = "2022-05-09T19:09:05.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

