module.exports = async function (context, req) {
  const date = "2023-07-20T21:07:35.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

