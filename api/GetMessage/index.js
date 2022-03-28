module.exports = async function (context, req) {
  const date = "2022-03-28T21:09:26.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

