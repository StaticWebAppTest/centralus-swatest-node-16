module.exports = async function (context, req) {
  const date = "2023-04-02T14:07:15.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

