module.exports = async function (context, req) {
  const date = "2023-06-19T12:18:44.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

