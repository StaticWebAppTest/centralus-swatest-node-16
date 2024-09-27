module.exports = async function (context, req) {
  const date = "2024-09-27T23:11:09.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

