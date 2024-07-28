module.exports = async function (context, req) {
  const date = "2024-07-28T19:07:37.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

