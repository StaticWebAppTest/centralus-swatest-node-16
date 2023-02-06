module.exports = async function (context, req) {
  const date = "2023-02-06T16:12:50.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

