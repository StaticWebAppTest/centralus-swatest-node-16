module.exports = async function (context, req) {
  const date = "2023-06-28T12:20:26.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

