module.exports = async function (context, req) {
  const date = "2023-07-12T05:09:27.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

