module.exports = async function (context, req) {
  const date = "2024-09-18T14:11:12.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

