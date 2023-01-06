module.exports = async function (context, req) {
  const date = "2023-01-06T12:18:02.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

