module.exports = async function (context, req) {
  const date = "2024-02-28T07:08:36.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

