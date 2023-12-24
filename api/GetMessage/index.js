module.exports = async function (context, req) {
  const date = "2023-12-24T14:07:35.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

