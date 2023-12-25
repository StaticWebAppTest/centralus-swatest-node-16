module.exports = async function (context, req) {
  const date = "2023-12-25T10:09:47.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

