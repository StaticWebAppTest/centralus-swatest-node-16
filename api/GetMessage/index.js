module.exports = async function (context, req) {
  const date = "2023-12-16T15:08:10.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

