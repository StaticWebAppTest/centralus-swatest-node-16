module.exports = async function (context, req) {
  const date = "2024-01-27T06:10:18.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

