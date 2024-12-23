module.exports = async function (context, req) {
  const date = "2024-12-23T17:10:24.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

