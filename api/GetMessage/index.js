module.exports = async function (context, req) {
  const date = "2024-05-14T17:08:18.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

