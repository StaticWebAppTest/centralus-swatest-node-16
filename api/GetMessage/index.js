module.exports = async function (context, req) {
  const date = "2024-06-22T04:11:56.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

