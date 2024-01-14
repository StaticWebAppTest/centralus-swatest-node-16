module.exports = async function (context, req) {
  const date = "2024-01-14T06:11:59.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

