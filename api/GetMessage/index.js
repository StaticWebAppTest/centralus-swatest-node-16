module.exports = async function (context, req) {
  const date = "2023-05-30T19:06:45.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

