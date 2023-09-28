module.exports = async function (context, req) {
  const date = "2023-09-28T14:08:27.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

