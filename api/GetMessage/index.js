module.exports = async function (context, req) {
  const date = "2025-12-23T11:13:21.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

