module.exports = async function (context, req) {
  const date = "2023-10-19T14:08:47.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

