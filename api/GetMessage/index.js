module.exports = async function (context, req) {
  const date = "2024-04-27T06:13:02.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

