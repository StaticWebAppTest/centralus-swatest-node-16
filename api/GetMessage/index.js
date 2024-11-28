module.exports = async function (context, req) {
  const date = "2024-11-28T08:16:57.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

