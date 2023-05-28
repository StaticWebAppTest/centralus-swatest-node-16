module.exports = async function (context, req) {
  const date = "2023-05-28T14:07:16.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

