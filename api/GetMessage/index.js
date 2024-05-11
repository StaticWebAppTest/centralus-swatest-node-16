module.exports = async function (context, req) {
  const date = "2024-05-11T16:11:11.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

