module.exports = async function (context, req) {
  const date = "2024-02-28T11:09:18.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

