module.exports = async function (context, req) {
  const date = "2024-05-05T13:09:11.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

