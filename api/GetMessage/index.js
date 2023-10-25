module.exports = async function (context, req) {
  const date = "2023-10-25T19:07:05.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

