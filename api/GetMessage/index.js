module.exports = async function (context, req) {
  const date = "2023-01-27T22:09:01.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

