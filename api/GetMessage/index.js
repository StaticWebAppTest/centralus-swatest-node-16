module.exports = async function (context, req) {
  const date = "2023-04-27T23:09:19.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

