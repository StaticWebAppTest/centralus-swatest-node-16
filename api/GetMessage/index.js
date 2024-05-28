module.exports = async function (context, req) {
  const date = "2024-05-28T11:08:11.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

