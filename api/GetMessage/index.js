module.exports = async function (context, req) {
  const date = "2023-03-01T08:13:51.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

