module.exports = async function (context, req) {
  const date = "2023-01-04T14:09:38.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

