module.exports = async function (context, req) {
  const date = "2024-05-25T05:09:30.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

