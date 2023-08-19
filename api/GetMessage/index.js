module.exports = async function (context, req) {
  const date = "2023-08-19T17:06:32.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

