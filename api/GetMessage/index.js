module.exports = async function (context, req) {
  const date = "2023-11-08T09:08:57.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

