module.exports = async function (context, req) {
  const date = "2022-10-06T21:12:26.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

