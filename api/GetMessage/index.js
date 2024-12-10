module.exports = async function (context, req) {
  const date = "2024-12-10T17:11:24.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

