module.exports = async function (context, req) {
  const date = "2023-10-25T05:08:32.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

