module.exports = async function (context, req) {
  const date = "2024-02-14T14:08:54.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

