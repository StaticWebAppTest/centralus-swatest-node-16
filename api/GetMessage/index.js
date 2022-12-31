module.exports = async function (context, req) {
  const date = "2022-12-31T12:15:23.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

