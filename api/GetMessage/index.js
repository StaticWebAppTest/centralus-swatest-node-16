module.exports = async function (context, req) {
  const date = "2024-08-16T23:11:27.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

