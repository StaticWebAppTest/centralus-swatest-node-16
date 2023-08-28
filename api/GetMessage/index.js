module.exports = async function (context, req) {
  const date = "2023-08-28T15:09:16.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

