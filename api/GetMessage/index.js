module.exports = async function (context, req) {
  const date = "2024-07-18T05:10:48.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

