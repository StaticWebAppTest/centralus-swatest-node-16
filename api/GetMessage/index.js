module.exports = async function (context, req) {
  const date = "2023-06-14T10:09:18.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

