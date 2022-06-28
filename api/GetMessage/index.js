module.exports = async function (context, req) {
  const date = "2022-06-28T09:10:16.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

