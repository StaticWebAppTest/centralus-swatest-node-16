module.exports = async function (context, req) {
  const date = "2024-06-27T05:10:57.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

