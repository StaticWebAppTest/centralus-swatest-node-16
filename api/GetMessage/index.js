module.exports = async function (context, req) {
  const date = "2024-06-27T12:19:02.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

