module.exports = async function (context, req) {
  const date = "2024-05-13T14:09:15.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

