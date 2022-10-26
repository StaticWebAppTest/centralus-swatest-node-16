module.exports = async function (context, req) {
  const date = "2022-10-26T16:16:19.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

