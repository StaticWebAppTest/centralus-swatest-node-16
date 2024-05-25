module.exports = async function (context, req) {
  const date = "2024-05-25T11:09:05.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

