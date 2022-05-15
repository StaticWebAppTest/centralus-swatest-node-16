module.exports = async function (context, req) {
  const date = "2022-05-15T19:09:00.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

