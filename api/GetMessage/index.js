module.exports = async function (context, req) {
  const date = "2023-07-25T09:09:23.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

