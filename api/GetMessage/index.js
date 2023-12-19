module.exports = async function (context, req) {
  const date = "2023-12-19T21:06:50.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

