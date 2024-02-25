module.exports = async function (context, req) {
  const date = "2024-02-25T14:07:35.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

