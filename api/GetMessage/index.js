module.exports = async function (context, req) {
  const date = "2023-12-08T09:09:19.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

