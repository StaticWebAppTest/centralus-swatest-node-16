module.exports = async function (context, req) {
  const date = "2024-12-25T11:09:25.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

