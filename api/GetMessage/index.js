module.exports = async function (context, req) {
  const date = "2022-10-31T19:09:36.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

