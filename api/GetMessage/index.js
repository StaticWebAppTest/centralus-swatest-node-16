module.exports = async function (context, req) {
  const date = "2024-02-11T08:11:23.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

