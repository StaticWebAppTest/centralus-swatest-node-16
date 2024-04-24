module.exports = async function (context, req) {
  const date = "2024-04-24T04:11:21.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

