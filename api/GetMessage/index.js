module.exports = async function (context, req) {
  const date = "2023-03-29T09:09:55.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

