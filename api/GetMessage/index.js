module.exports = async function (context, req) {
  const date = "2023-03-17T02:07:27.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

