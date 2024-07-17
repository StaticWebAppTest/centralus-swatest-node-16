module.exports = async function (context, req) {
  const date = "2024-07-17T11:08:56.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

