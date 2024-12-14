module.exports = async function (context, req) {
  const date = "2024-12-14T11:09:27.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

