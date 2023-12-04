module.exports = async function (context, req) {
  const date = "2023-12-04T08:12:37.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

