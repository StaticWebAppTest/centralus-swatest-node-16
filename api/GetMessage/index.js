module.exports = async function (context, req) {
  const date = "2023-06-17T18:09:57.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

