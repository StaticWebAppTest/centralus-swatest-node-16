module.exports = async function (context, req) {
  const date = "2023-05-26T09:08:40.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

