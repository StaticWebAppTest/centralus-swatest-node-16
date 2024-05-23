module.exports = async function (context, req) {
  const date = "2024-05-23T12:18:08.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

