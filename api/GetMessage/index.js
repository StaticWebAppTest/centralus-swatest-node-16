module.exports = async function (context, req) {
  const date = "2023-03-29T08:12:25.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

