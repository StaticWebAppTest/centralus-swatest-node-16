module.exports = async function (context, req) {
  const date = "2022-03-19T02:05:51.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

