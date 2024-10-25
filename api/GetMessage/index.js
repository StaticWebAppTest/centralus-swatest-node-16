module.exports = async function (context, req) {
  const date = "2024-10-25T13:19:53.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

