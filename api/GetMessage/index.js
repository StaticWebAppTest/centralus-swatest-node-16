module.exports = async function (context, req) {
  const date = "2023-03-17T22:08:57.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

