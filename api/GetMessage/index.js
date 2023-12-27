module.exports = async function (context, req) {
  const date = "2023-12-27T09:09:06.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

