module.exports = async function (context, req) {
  const date = "2022-06-19T16:12:54.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

