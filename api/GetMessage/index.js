module.exports = async function (context, req) {
  const date = "2024-03-14T09:09:17.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

