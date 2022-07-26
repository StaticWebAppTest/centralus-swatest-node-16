module.exports = async function (context, req) {
  const date = "2022-07-26T14:09:57.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

