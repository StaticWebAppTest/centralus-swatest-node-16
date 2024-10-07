module.exports = async function (context, req) {
  const date = "2024-10-07T17:11:20.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

