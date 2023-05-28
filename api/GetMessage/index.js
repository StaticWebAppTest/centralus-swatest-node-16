module.exports = async function (context, req) {
  const date = "2023-05-28T19:06:44.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

