module.exports = async function (context, req) {
  const date = "2023-02-02T21:08:40.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

