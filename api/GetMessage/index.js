module.exports = async function (context, req) {
  const date = "2023-01-20T09:10:07.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

