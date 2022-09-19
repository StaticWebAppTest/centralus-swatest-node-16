module.exports = async function (context, req) {
  const date = "2022-09-19T19:12:52.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

