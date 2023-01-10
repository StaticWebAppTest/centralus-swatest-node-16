module.exports = async function (context, req) {
  const date = "2023-01-10T09:09:58.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

