module.exports = async function (context, req) {
  const date = "2024-05-25T09:09:48.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

