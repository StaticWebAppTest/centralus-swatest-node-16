module.exports = async function (context, req) {
  const date = "2023-06-28T01:01:21.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

