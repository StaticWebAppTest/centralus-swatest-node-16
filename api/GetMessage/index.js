module.exports = async function (context, req) {
  const date = "2023-04-28T04:10:45.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

