module.exports = async function (context, req) {
  const date = "2024-05-28T14:09:23.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

