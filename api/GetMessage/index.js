module.exports = async function (context, req) {
  const date = "2023-04-25T15:09:22.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

