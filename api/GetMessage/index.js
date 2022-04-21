module.exports = async function (context, req) {
  const date = "2022-04-21T22:10:31.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

