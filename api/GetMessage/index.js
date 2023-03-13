module.exports = async function (context, req) {
  const date = "2023-03-13T15:09:22.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

