module.exports = async function (context, req) {
  const date = "2023-02-06T13:24:18.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

