module.exports = async function (context, req) {
  const date = "2024-12-25T09:12:11.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

