module.exports = async function (context, req) {
  const date = "2024-07-23T11:10:16.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

