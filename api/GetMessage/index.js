module.exports = async function (context, req) {
  const date = "2023-12-12T09:09:25.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

