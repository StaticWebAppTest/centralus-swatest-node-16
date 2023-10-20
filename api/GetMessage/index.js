module.exports = async function (context, req) {
  const date = "2023-10-20T18:10:32.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

