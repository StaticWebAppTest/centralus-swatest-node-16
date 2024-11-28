module.exports = async function (context, req) {
  const date = "2024-11-28T14:11:55.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

