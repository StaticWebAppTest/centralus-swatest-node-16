module.exports = async function (context, req) {
  const date = "2024-05-27T00:46:23.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

