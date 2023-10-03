module.exports = async function (context, req) {
  const date = "2023-10-03T09:08:49.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

