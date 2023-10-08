module.exports = async function (context, req) {
  const date = "2023-10-08T14:07:09.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

