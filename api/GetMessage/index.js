module.exports = async function (context, req) {
  const date = "2023-07-06T23:10:21.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

