module.exports = async function (context, req) {
  const date = "2022-04-19T13:30:56.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

