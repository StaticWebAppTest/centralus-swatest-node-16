module.exports = async function (context, req) {
  const date = "2023-02-10T14:09:09.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

