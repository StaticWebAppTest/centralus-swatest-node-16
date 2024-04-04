module.exports = async function (context, req) {
  const date = "2024-04-04T09:09:51.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

