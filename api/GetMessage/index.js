module.exports = async function (context, req) {
  const date = "2023-09-21T11:07:34.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

