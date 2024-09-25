module.exports = async function (context, req) {
  const date = "2024-09-25T15:12:01.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

