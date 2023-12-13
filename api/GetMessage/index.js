module.exports = async function (context, req) {
  const date = "2023-12-13T14:09:02.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

