module.exports = async function (context, req) {
  const date = "2023-08-27T03:08:45.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

