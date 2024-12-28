module.exports = async function (context, req) {
  const date = "2024-12-28T10:11:09.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

