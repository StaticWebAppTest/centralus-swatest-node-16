module.exports = async function (context, req) {
  const date = "2024-05-28T21:10:07.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

