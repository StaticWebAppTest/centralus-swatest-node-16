module.exports = async function (context, req) {
  const date = "2023-05-03T08:11:16.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

