module.exports = async function (context, req) {
  const date = "2023-09-07T09:09:00.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

