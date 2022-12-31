module.exports = async function (context, req) {
  const date = "2022-12-31T15:08:45.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

