module.exports = async function (context, req) {
  const date = "2022-03-03T17:12:25.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

