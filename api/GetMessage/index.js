module.exports = async function (context, req) {
  const date = "2022-02-28T14:14:39.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

