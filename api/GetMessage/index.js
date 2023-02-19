module.exports = async function (context, req) {
  const date = "2023-02-19T14:08:16.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

