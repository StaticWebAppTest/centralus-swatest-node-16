module.exports = async function (context, req) {
  const date = "2023-06-04T13:09:17.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

