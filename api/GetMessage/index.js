module.exports = async function (context, req) {
  const date = "2024-06-19T07:09:44.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

