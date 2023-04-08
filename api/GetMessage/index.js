module.exports = async function (context, req) {
  const date = "2023-04-08T12:15:08.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

