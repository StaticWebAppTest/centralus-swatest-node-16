module.exports = async function (context, req) {
  const date = "2024-06-25T09:10:46.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

