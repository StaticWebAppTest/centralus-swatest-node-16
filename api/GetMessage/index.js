module.exports = async function (context, req) {
  const date = "2023-10-12T09:09:22.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

