module.exports = async function (context, req) {
  const date = "2023-08-08T09:08:52.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

