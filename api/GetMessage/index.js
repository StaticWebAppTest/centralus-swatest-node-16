module.exports = async function (context, req) {
  const date = "2023-06-13T10:09:21.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

