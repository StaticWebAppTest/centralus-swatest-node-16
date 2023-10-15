module.exports = async function (context, req) {
  const date = "2023-10-15T02:19:02.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

