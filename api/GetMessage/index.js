module.exports = async function (context, req) {
  const date = "2024-02-22T23:11:07.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

