module.exports = async function (context, req) {
  const date = "2024-05-28T13:11:49.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

