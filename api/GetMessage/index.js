module.exports = async function (context, req) {
  const date = "2022-09-28T14:28:46.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

