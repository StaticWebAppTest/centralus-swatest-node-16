module.exports = async function (context, req) {
  const date = "2022-07-31T20:11:31.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

