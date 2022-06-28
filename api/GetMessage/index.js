module.exports = async function (context, req) {
  const date = "2022-06-28T21:08:04.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

