module.exports = async function (context, req) {
  const date = "2023-01-09T22:09:23.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

