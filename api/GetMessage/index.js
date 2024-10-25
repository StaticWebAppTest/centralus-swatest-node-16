module.exports = async function (context, req) {
  const date = "2024-10-25T15:12:09.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

