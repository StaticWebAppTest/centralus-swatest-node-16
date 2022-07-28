module.exports = async function (context, req) {
  const date = "2022-07-28T18:14:37.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

