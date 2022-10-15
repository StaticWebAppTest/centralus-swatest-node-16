module.exports = async function (context, req) {
  const date = "2022-10-15T20:13:26.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

