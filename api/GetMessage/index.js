module.exports = async function (context, req) {
  const date = "2024-04-17T10:10:12.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

