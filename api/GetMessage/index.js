module.exports = async function (context, req) {
  const date = "2023-09-12T08:11:28.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

