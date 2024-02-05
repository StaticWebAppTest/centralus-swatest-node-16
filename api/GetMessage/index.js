module.exports = async function (context, req) {
  const date = "2024-02-05T13:09:19.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

