module.exports = async function (context, req) {
  const date = "2023-04-16T16:10:23.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

