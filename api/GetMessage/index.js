module.exports = async function (context, req) {
  const date = "2023-06-24T02:34:17.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

