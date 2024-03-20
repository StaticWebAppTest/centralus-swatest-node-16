module.exports = async function (context, req) {
  const date = "2024-03-20T21:09:07.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

