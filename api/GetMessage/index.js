module.exports = async function (context, req) {
  const date = "2024-09-28T14:09:17.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

