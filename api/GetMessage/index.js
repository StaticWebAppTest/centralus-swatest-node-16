module.exports = async function (context, req) {
  const date = "2024-04-09T05:09:09.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

