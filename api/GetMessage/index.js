module.exports = async function (context, req) {
  const date = "2023-03-22T23:07:35.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

