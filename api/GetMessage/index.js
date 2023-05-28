module.exports = async function (context, req) {
  const date = "2023-05-28T07:07:48.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

