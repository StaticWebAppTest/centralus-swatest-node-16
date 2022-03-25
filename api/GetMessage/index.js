module.exports = async function (context, req) {
  const date = "2022-03-25T21:09:40.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

