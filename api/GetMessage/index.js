module.exports = async function (context, req) {
  const date = "2023-07-28T04:10:31.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

