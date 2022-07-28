module.exports = async function (context, req) {
  const date = "2022-07-28T03:39:09.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

