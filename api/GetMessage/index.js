module.exports = async function (context, req) {
  const date = "2024-03-25T07:09:06.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

