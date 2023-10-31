module.exports = async function (context, req) {
  const date = "2023-10-31T06:12:07.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

