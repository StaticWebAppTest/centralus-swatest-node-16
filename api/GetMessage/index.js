module.exports = async function (context, req) {
  const date = "2024-02-11T05:08:00.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

