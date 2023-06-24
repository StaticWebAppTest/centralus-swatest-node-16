module.exports = async function (context, req) {
  const date = "2023-06-24T03:22:18.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

