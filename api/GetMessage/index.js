module.exports = async function (context, req) {
  const date = "2023-01-19T05:09:04.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

