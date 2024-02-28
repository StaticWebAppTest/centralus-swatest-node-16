module.exports = async function (context, req) {
  const date = "2024-02-28T03:09:42.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

