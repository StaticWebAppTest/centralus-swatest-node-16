module.exports = async function (context, req) {
  const date = "2023-03-04T12:17:19.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

