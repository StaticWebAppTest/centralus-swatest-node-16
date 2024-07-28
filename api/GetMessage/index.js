module.exports = async function (context, req) {
  const date = "2024-07-28T05:11:37.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

