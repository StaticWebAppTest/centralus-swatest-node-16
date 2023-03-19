module.exports = async function (context, req) {
  const date = "2023-03-19T09:09:14.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

