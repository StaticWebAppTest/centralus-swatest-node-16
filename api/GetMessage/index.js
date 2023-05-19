module.exports = async function (context, req) {
  const date = "2023-05-19T07:08:05.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

