module.exports = async function (context, req) {
  const date = "2024-06-10T14:11:32.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

