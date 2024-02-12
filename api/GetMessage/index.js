module.exports = async function (context, req) {
  const date = "2024-02-12T21:07:57.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

