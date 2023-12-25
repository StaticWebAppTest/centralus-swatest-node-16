module.exports = async function (context, req) {
  const date = "2023-12-25T15:10:05.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

