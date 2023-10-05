module.exports = async function (context, req) {
  const date = "2023-10-05T08:12:17.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

