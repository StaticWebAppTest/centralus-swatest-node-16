module.exports = async function (context, req) {
  const date = "2023-12-09T15:08:08.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

