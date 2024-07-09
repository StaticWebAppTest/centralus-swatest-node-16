module.exports = async function (context, req) {
  const date = "2024-07-09T15:10:30.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

