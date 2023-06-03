module.exports = async function (context, req) {
  const date = "2023-06-03T09:07:48.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

