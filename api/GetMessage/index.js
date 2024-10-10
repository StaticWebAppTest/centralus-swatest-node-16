module.exports = async function (context, req) {
  const date = "2024-10-10T19:09:09.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

