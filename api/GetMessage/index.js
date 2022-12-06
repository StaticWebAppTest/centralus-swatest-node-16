module.exports = async function (context, req) {
  const date = "2022-12-06T10:10:16.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

