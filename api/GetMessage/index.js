module.exports = async function (context, req) {
  const date = "2024-09-14T13:14:11.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

