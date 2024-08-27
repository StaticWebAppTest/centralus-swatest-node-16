module.exports = async function (context, req) {
  const date = "2024-08-27T00:52:18.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

