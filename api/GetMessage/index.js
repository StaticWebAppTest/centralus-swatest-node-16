module.exports = async function (context, req) {
  const date = "2023-10-20T23:08:22.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

