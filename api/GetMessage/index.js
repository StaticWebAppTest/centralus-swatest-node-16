module.exports = async function (context, req) {
  const date = "2023-04-21T21:07:40.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

