module.exports = async function (context, req) {
  const date = "2023-07-28T15:09:16.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

