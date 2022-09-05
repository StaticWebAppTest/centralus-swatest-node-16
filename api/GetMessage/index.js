module.exports = async function (context, req) {
  const date = "2022-09-05T08:14:56.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

