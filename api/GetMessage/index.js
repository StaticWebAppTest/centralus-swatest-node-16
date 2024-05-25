module.exports = async function (context, req) {
  const date = "2024-05-25T15:09:17.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

