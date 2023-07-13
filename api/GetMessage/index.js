module.exports = async function (context, req) {
  const date = "2023-07-13T15:10:12.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

