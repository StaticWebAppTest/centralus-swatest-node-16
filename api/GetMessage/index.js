module.exports = async function (context, req) {
  const date = "2023-08-04T23:07:54.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

