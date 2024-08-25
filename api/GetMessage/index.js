module.exports = async function (context, req) {
  const date = "2024-08-25T15:10:06.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

