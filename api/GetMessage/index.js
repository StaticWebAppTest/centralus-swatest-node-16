module.exports = async function (context, req) {
  const date = "2023-01-17T07:09:08.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

