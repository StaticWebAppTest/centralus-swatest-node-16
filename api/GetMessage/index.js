module.exports = async function (context, req) {
  const date = "2024-08-23T14:11:15.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

