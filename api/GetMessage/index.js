module.exports = async function (context, req) {
  const date = "2023-10-08T15:07:56.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

