module.exports = async function (context, req) {
  const date = "2024-09-08T07:09:51.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

