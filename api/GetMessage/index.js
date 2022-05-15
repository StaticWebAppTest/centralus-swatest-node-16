module.exports = async function (context, req) {
  const date = "2022-05-15T08:13:37.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

