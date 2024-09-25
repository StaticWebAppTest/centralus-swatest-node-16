module.exports = async function (context, req) {
  const date = "2024-09-25T05:11:50.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

