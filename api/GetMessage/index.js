module.exports = async function (context, req) {
  const date = "2023-12-23T18:10:32.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

