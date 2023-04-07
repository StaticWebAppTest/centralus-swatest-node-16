module.exports = async function (context, req) {
  const date = "2023-04-07T17:07:42.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

