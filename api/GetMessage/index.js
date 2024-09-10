module.exports = async function (context, req) {
  const date = "2024-09-10T11:09:31.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

