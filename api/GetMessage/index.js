module.exports = async function (context, req) {
  const date = "2022-06-19T19:08:13.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

