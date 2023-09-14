module.exports = async function (context, req) {
  const date = "2023-09-14T10:09:42.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

