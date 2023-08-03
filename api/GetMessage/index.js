module.exports = async function (context, req) {
  const date = "2023-08-03T13:11:59.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

