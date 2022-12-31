module.exports = async function (context, req) {
  const date = "2022-12-31T22:08:15.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

