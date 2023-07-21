module.exports = async function (context, req) {
  const date = "2023-07-21T06:11:54.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

