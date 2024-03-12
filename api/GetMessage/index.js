module.exports = async function (context, req) {
  const date = "2024-03-12T23:09:50.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

