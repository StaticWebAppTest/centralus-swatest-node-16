module.exports = async function (context, req) {
  const date = "2022-12-06T17:08:48.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

