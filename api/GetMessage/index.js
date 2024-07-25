module.exports = async function (context, req) {
  const date = "2024-07-25T10:11:40.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

