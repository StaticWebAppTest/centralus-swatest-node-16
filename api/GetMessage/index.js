module.exports = async function (context, req) {
  const date = "2024-02-13T11:09:07.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

