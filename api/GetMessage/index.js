module.exports = async function (context, req) {
  const date = "2023-10-23T11:07:35.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

