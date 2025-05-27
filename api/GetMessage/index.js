module.exports = async function (context, req) {
  const date = "2025-05-27T09:14:09.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

