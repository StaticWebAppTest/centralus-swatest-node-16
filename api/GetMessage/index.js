module.exports = async function (context, req) {
  const date = "2024-05-28T09:10:21.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

