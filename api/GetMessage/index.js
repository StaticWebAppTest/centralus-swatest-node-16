module.exports = async function (context, req) {
  const date = "2023-07-13T09:09:58.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

