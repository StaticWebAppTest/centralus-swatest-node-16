module.exports = async function (context, req) {
  const date = "2023-02-08T11:07:51.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

