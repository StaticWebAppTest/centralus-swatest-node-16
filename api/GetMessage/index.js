module.exports = async function (context, req) {
  const date = "2024-01-27T09:07:45.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

