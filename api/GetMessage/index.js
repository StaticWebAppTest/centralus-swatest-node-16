module.exports = async function (context, req) {
  const date = "2023-03-07T17:09:35.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

