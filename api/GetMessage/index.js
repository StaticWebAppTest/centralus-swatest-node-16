module.exports = async function (context, req) {
  const date = "2024-08-14T15:10:45.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

