module.exports = async function (context, req) {
  const date = "2023-07-23T10:08:22.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

