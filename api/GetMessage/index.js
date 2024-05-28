module.exports = async function (context, req) {
  const date = "2024-05-28T10:11:07.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

