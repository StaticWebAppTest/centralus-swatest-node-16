module.exports = async function (context, req) {
  const date = "2024-05-23T07:09:16.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

