module.exports = async function (context, req) {
  const date = "2022-03-01T08:12:42.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

