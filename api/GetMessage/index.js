module.exports = async function (context, req) {
  const date = "2024-07-28T08:11:57.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

