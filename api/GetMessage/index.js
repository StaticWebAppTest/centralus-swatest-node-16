module.exports = async function (context, req) {
  const date = "2023-09-21T07:08:40.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

