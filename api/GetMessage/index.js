module.exports = async function (context, req) {
  const date = "2023-07-08T11:07:31.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

