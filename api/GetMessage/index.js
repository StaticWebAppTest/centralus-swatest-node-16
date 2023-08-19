module.exports = async function (context, req) {
  const date = "2023-08-19T14:06:36.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

