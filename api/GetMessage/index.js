module.exports = async function (context, req) {
  const date = "2023-10-06T22:07:47.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

