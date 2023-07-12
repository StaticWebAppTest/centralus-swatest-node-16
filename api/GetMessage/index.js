module.exports = async function (context, req) {
  const date = "2023-07-12T19:07:57.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

