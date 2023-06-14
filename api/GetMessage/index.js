module.exports = async function (context, req) {
  const date = "2023-06-14T07:08:19.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

