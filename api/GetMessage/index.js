module.exports = async function (context, req) {
  const date = "2023-03-08T21:09:28.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

