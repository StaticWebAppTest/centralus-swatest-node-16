module.exports = async function (context, req) {
  const date = "2024-02-07T15:08:30.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

