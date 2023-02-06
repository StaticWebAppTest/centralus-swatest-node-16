module.exports = async function (context, req) {
  const date = "2023-02-06T22:09:04.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

