module.exports = async function (context, req) {
  const date = "2024-07-12T09:11:57.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

