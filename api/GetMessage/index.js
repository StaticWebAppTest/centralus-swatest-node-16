module.exports = async function (context, req) {
  const date = "2024-05-25T21:08:19.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

