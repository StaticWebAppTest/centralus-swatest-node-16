module.exports = async function (context, req) {
  const date = "2024-03-05T09:09:01.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

