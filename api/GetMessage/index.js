module.exports = async function (context, req) {
  const date = "2023-02-13T06:13:14.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

