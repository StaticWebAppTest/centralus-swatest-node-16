module.exports = async function (context, req) {
  const date = "2023-11-14T11:07:37.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

