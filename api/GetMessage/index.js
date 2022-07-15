module.exports = async function (context, req) {
  const date = "2022-07-15T08:14:46.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

