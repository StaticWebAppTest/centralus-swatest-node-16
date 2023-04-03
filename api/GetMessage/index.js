module.exports = async function (context, req) {
  const date = "2023-04-03T06:12:02.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

