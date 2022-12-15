module.exports = async function (context, req) {
  const date = "2022-12-15T21:08:13.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

