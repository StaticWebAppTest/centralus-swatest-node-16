module.exports = async function (context, req) {
  const date = "2024-07-17T14:10:07.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

