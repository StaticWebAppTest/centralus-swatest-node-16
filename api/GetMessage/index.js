module.exports = async function (context, req) {
  const date = "2023-06-30T09:09:14.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

