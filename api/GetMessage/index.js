module.exports = async function (context, req) {
  const date = "2023-05-25T09:08:54.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

