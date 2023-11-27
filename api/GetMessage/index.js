module.exports = async function (context, req) {
  const date = "2023-11-27T10:10:16.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

