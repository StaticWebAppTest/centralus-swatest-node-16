module.exports = async function (context, req) {
  const date = "2023-05-08T22:08:03.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

