module.exports = async function (context, req) {
  const date = "2024-05-12T13:09:09.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

