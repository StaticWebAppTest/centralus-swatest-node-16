module.exports = async function (context, req) {
  const date = "2023-11-25T10:08:36.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

