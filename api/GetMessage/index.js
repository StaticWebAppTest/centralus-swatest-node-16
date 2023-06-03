module.exports = async function (context, req) {
  const date = "2023-06-03T10:08:09.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

