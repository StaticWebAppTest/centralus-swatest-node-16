module.exports = async function (context, req) {
  const date = "2023-12-21T13:11:13.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

