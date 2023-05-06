module.exports = async function (context, req) {
  const date = "2023-05-06T23:08:21.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

