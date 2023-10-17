module.exports = async function (context, req) {
  const date = "2023-10-17T09:09:28.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

