module.exports = async function (context, req) {
  const date = "2022-09-21T09:15:59.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

