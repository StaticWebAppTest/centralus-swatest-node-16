module.exports = async function (context, req) {
  const date = "2023-06-24T06:12:34.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

