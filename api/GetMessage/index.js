module.exports = async function (context, req) {
  const date = "2023-08-16T14:07:48.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

