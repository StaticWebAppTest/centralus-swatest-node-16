module.exports = async function (context, req) {
  const date = "2022-04-19T03:01:48.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

