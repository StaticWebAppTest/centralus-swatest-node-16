module.exports = async function (context, req) {
  const date = "2023-06-07T21:07:51.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

