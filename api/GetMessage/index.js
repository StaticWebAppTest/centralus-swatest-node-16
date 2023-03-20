module.exports = async function (context, req) {
  const date = "2023-03-20T19:07:52.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

