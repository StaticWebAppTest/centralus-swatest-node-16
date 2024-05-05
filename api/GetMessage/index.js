module.exports = async function (context, req) {
  const date = "2024-05-05T21:07:56.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

