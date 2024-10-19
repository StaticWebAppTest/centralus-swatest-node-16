module.exports = async function (context, req) {
  const date = "2024-10-19T16:13:07.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

