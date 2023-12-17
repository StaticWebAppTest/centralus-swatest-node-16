module.exports = async function (context, req) {
  const date = "2023-12-17T09:08:40.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

