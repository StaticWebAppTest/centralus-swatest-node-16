module.exports = async function (context, req) {
  const date = "2023-09-12T16:11:16.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

