module.exports = async function (context, req) {
  const date = "2023-08-08T03:09:23.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

