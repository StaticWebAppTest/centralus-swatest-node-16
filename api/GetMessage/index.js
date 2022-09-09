module.exports = async function (context, req) {
  const date = "2022-09-09T10:13:27.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

