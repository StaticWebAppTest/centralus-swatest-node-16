module.exports = async function (context, req) {
  const date = "2022-08-19T03:45:02.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

